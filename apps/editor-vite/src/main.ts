import * as vfEmbed from "vegafusion-embed";
import * as monaco from 'monaco-editor'
import * as Monaco from 'monaco-editor/esm/vs/editor/editor.api';
import _ from "lodash"
import * as grpcWeb from 'grpc-web';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { createPromiseClient } from "@bufbuild/connect";
import { createGrpcWebTransport } from "@bufbuild/connect-web";
import { VegaFusionRuntime } from "./gen/services_connect";
import { QueryRequest } from "./gen/services_pb";


interface MsgReceiver {
    receive: (bytes: Uint8Array) => void
}

function init() {
    monaco_init()

    let initial_spec = JSON.stringify(flights_spec, null, 2);

    let editor = Monaco.editor.create(document.getElementById('editor-monaco'), {
        value: initial_spec,
        language: 'json',
        theme: 'vs-dark',
        automaticLayout: true,
        fixedOverflowWidgets: true,
    });
    let spec_model = editor.getModel();

    let server_spec_monaco = Monaco.editor.create(document.getElementById('server-spec-monaco'), {
        value: "",
        language: 'json',
        theme: 'vs-dark',
        automaticLayout: true,
        readOnly: true,
    });

    let client_spec_monaco = Monaco.editor.create(document.getElementById('client-spec-monaco'), {
        value: "",
        language: 'json',
        theme: 'vs-dark',
        automaticLayout: true,
        readOnly: true,
    });

    let comm_plan_monaco = Monaco.editor.create(document.getElementById('comm-plan-monaco'), {
        value: "",
        language: 'json',
        theme: 'vs-dark',
        automaticLayout: true,
        readOnly: true,
    });

    const hostname = `http://${window.location.hostname}:50051`;

    let opts = {}

    const DEVTOOLS_ENABLED = false;

    if (DEVTOOLS_ENABLED && typeof __gRPC_devtools__ === "object" && __gRPC_devtools__ !== null) {
        console.log("Devtools started");

        opts = {
            unaryInterceptors: [__gRPC_devtools__.gRPCDevtoolsUnaryInterceptor],
            streamInterceptors: [__gRPC_devtools__.gRPCDevtoolsStreamInterceptor],
        };
    }

    const t = createGrpcWebTransport({ baseUrl: hostname, useBinaryFormat: true, })
    const client = createPromiseClient(VegaFusionRuntime, t)

    // t.unary(VegaFusionRuntime, VegaFusionRuntime.methods.taskGraphQuery, undefined, undefined, undefined, undefined)
    // let client = new VegaFusionRuntimeClient(hostname, opts);
    let send_message_grpc = (send_msg_bytes: Uint8Array, receiver: MsgReceiver) => {
        const qry = QueryRequest.fromBinary(send_msg_bytes)
        console.log(qry);
        
        const promise = client.taskGraphQuery(qry)

        promise.then((response: any) => {
            receiver.receive(response)
        })
    }

    function update_chart() {
        let msg_receiver;
        try {
            let element = document.getElementById("vega-chart");
            let config = {
                verbose: false,
                debounce_wait: 30,
                debounce_max_wait: 60,
            };
            msg_receiver = vfEmbed.embedVegaFusion(
                element,
                editor.getValue(),
                send_message_grpc,
                config
            );
            server_spec_monaco.setValue(msg_receiver.server_spec_json());
            client_spec_monaco.setValue(msg_receiver.client_spec_json());
            comm_plan_monaco.setValue(msg_receiver.comm_plan_json());
        } catch (e) {
            console.error("Failed to render spec");
            server_spec_monaco.setValue("");
            client_spec_monaco.setValue("");
            comm_plan_monaco.setValue("");
            console.log(e);
            return
        }
    }

    // Update chart (with debounce) when editor value changes
    update_chart()
    let content_change_listener = _.debounce((content) => {
        update_chart()
    }, 750);

    spec_model.onDidChangeContent(content_change_listener)
}

function monaco_init() {
    // Monaco.languages.json.jsonDefaults.setDiagnosticsOptions(
    //     {
    //         validate: true,
    //         allowComments: true,
    //         trailingCommas: true,
    //         schemas: [],
    //         enableSchemaRequest: true
    //     }
    // );
}

let flights_spec = {
    "$schema": "https://vega.github.io/schema/vega/v5.json",
    "background": "white",
    "padding": 5,
    "data": [
        { "name": "brush_store" },
        {
            "name": "source_0",
            "url": "datasets/flights_200k.feather",
            "format": { "type": "json", "parse": { "date": "date" } },
            "transform": [
                {
                    "type": "extent",
                    "field": "delay",
                    "signal": "child__column_delay_layer_1_bin_maxbins_20_delay_extent"
                },
                {
                    "type": "bin",
                    "field": "delay",
                    "as": ["bin_maxbins_20_delay", "bin_maxbins_20_delay_end"],
                    "signal": "child__column_delay_layer_1_bin_maxbins_20_delay_bins",
                    "extent": {
                        "signal": "child__column_delay_layer_1_bin_maxbins_20_delay_extent"
                    },
                    "maxbins": 20
                },
                {
                    "type": "extent",
                    "field": "distance",
                    "signal": "child__column_distance_layer_0_bin_maxbins_20_distance_extent"
                },
                {
                    "type": "bin",
                    "field": "distance",
                    "as": ["bin_maxbins_20_distance", "bin_maxbins_20_distance_end"],
                    "signal": "child__column_distance_layer_0_bin_maxbins_20_distance_bins",
                    "extent": {
                        "signal": "child__column_distance_layer_0_bin_maxbins_20_distance_extent"
                    },
                    "maxbins": 20
                },
                { "type": "formula", "expr": "hours(datum.date)", "as": "time" }
            ]
        },
        {
            "name": "data_0",
            "source": "source_0",
            "transform": [
                {
                    "type": "extent",
                    "field": "time",
                    "signal": "child__column_time_layer_1_bin_maxbins_20_time_extent"
                },
                {
                    "type": "bin",
                    "field": "time",
                    "as": ["bin_maxbins_20_time", "bin_maxbins_20_time_end"],
                    "signal": "child__column_time_layer_1_bin_maxbins_20_time_bins",
                    "extent": {
                        "signal": "child__column_time_layer_1_bin_maxbins_20_time_extent"
                    },
                    "maxbins": 20
                }
            ]
        },
        {
            "name": "data_1",
            "source": "data_0",
            "transform": [
                {
                    "type": "filter",
                    "expr": "!length(data(\"brush_store\")) || vlSelectionTest(\"brush_store\", datum)"
                },
                {
                    "type": "aggregate",
                    "groupby": ["bin_maxbins_20_time", "bin_maxbins_20_time_end"],
                    "ops": ["count"],
                    "fields": [null],
                    "as": ["__count"]
                },
                {
                    "type": "filter",
                    "expr": "isValid(datum[\"bin_maxbins_20_time\"]) && isFinite(+datum[\"bin_maxbins_20_time\"])"
                }
            ]
        },
        {
            "name": "data_2",
            "source": "data_0",
            "transform": [
                {
                    "type": "aggregate",
                    "groupby": ["bin_maxbins_20_time", "bin_maxbins_20_time_end"],
                    "ops": ["count"],
                    "fields": [null],
                    "as": ["__count"]
                },
                {
                    "type": "filter",
                    "expr": "isValid(datum[\"bin_maxbins_20_time\"]) && isFinite(+datum[\"bin_maxbins_20_time\"])"
                }
            ]
        },
        {
            "name": "data_3",
            "source": "source_0",
            "transform": [
                {
                    "type": "filter",
                    "expr": "!length(data(\"brush_store\")) || vlSelectionTest(\"brush_store\", datum)"
                }
            ]
        },
        {
            "name": "data_4",
            "source": "data_3",
            "transform": [
                {
                    "type": "aggregate",
                    "groupby": ["bin_maxbins_20_delay", "bin_maxbins_20_delay_end"],
                    "ops": ["count"],
                    "fields": [null],
                    "as": ["__count"]
                },
                {
                    "type": "filter",
                    "expr": "isValid(datum[\"bin_maxbins_20_delay\"]) && isFinite(+datum[\"bin_maxbins_20_delay\"])"
                }
            ]
        },
        {
            "name": "data_5",
            "source": "data_3",
            "transform": [
                {
                    "type": "aggregate",
                    "groupby": ["bin_maxbins_20_distance", "bin_maxbins_20_distance_end"],
                    "ops": ["count"],
                    "fields": [null],
                    "as": ["__count"]
                },
                {
                    "type": "filter",
                    "expr": "isValid(datum[\"bin_maxbins_20_distance\"]) && isFinite(+datum[\"bin_maxbins_20_distance\"])"
                }
            ]
        },
        {
            "name": "data_6",
            "source": "source_0",
            "transform": [
                {
                    "type": "aggregate",
                    "groupby": ["bin_maxbins_20_distance", "bin_maxbins_20_distance_end"],
                    "ops": ["count"],
                    "fields": [null],
                    "as": ["__count"]
                },
                {
                    "type": "filter",
                    "expr": "isValid(datum[\"bin_maxbins_20_distance\"]) && isFinite(+datum[\"bin_maxbins_20_distance\"])"
                }
            ]
        },
        {
            "name": "data_7",
            "source": "source_0",
            "transform": [
                {
                    "type": "aggregate",
                    "groupby": ["bin_maxbins_20_delay", "bin_maxbins_20_delay_end"],
                    "ops": ["count"],
                    "fields": [null],
                    "as": ["__count"]
                },
                {
                    "type": "filter",
                    "expr": "isValid(datum[\"bin_maxbins_20_delay\"]) && isFinite(+datum[\"bin_maxbins_20_delay\"])"
                }
            ]
        }
    ],
    "signals": [
        { "name": "childWidth", "value": 200 },
        { "name": "childHeight", "value": 200 },
        {
            "name": "unit",
            "value": {},
            "on": [
                { "events": "mousemove", "update": "isTuple(group()) ? group() : unit" }
            ]
        },
        {
            "name": "brush",
            "update": "vlSelectionResolve(\"brush_store\", \"union\")"
        }
    ],
    "layout": { "padding": 20, "columns": 3, "bounds": "full", "align": "all" },
    "marks": [
        {
            "type": "group",
            "name": "child__column_distance_group",
            "style": "cell",
            "encode": {
                "update": {
                    "width": { "signal": "childWidth" },
                    "height": { "signal": "childHeight" }
                }
            },
            "signals": [
                {
                    "name": "brush_x",
                    "value": [],
                    "on": [
                        {
                            "events": {
                                "source": "scope",
                                "type": "mousedown",
                                "filter": [
                                    "!event.item || event.item.mark.name !== \"brush_brush\""
                                ]
                            },
                            "update": "[x(unit), x(unit)]"
                        },
                        {
                            "events": {
                                "source": "window",
                                "type": "mousemove",
                                "consume": true,
                                "between": [
                                    {
                                        "source": "scope",
                                        "type": "mousedown",
                                        "filter": [
                                            "!event.item || event.item.mark.name !== \"brush_brush\""
                                        ]
                                    },
                                    { "source": "window", "type": "mouseup" }
                                ]
                            },
                            "update": "[brush_x[0], clamp(x(unit), 0, childWidth)]"
                        },
                        {
                            "events": { "signal": "brush_scale_trigger" },
                            "update": "[scale(\"child__column_distance_x\", brush_distance[0]), scale(\"child__column_distance_x\", brush_distance[1])]"
                        },
                        {
                            "events": [{ "source": "view", "type": "dblclick" }],
                            "update": "[0, 0]"
                        },
                        {
                            "events": { "signal": "brush_translate_delta" },
                            "update": "clampRange(panLinear(brush_translate_anchor.extent_x, brush_translate_delta.x / span(brush_translate_anchor.extent_x)), 0, childWidth)"
                        },
                        {
                            "events": { "signal": "brush_zoom_delta" },
                            "update": "clampRange(zoomLinear(brush_x, brush_zoom_anchor.x, brush_zoom_delta), 0, childWidth)"
                        }
                    ]
                },
                {
                    "name": "brush_distance",
                    "on": [
                        {
                            "events": { "signal": "brush_x" },
                            "update": "brush_x[0] === brush_x[1] ? null : invert(\"child__column_distance_x\", brush_x)"
                        }
                    ]
                },
                {
                    "name": "brush_scale_trigger",
                    "value": {},
                    "on": [
                        {
                            "events": [{ "scale": "child__column_distance_x" }],
                            "update": "(!isArray(brush_distance) || (+invert(\"child__column_distance_x\", brush_x)[0] === +brush_distance[0] && +invert(\"child__column_distance_x\", brush_x)[1] === +brush_distance[1])) ? brush_scale_trigger : {}"
                        }
                    ]
                },
                {
                    "name": "brush_tuple",
                    "on": [
                        {
                            "events": [{ "signal": "brush_distance" }],
                            "update": "brush_distance ? {unit: \"child__column_distance_layer_0\", fields: brush_tuple_fields, values: [brush_distance]} : null"
                        }
                    ]
                },
                {
                    "name": "brush_tuple_fields",
                    "value": [{ "field": "distance", "channel": "x", "type": "R" }]
                },
                {
                    "name": "brush_translate_anchor",
                    "value": {},
                    "on": [
                        {
                            "events": [
                                {
                                    "source": "scope",
                                    "type": "mousedown",
                                    "markname": "brush_brush"
                                }
                            ],
                            "update": "{x: x(unit), y: y(unit), extent_x: slice(brush_x)}"
                        }
                    ]
                },
                {
                    "name": "brush_translate_delta",
                    "value": {},
                    "on": [
                        {
                            "events": [
                                {
                                    "source": "window",
                                    "type": "mousemove",
                                    "consume": true,
                                    "between": [
                                        {
                                            "source": "scope",
                                            "type": "mousedown",
                                            "markname": "brush_brush"
                                        },
                                        { "source": "window", "type": "mouseup" }
                                    ]
                                }
                            ],
                            "update": "{x: brush_translate_anchor.x - x(unit), y: brush_translate_anchor.y - y(unit)}"
                        }
                    ]
                },
                {
                    "name": "brush_zoom_anchor",
                    "on": [
                        {
                            "events": [
                                {
                                    "source": "scope",
                                    "type": "wheel",
                                    "consume": true,
                                    "markname": "brush_brush"
                                }
                            ],
                            "update": "{x: x(unit), y: y(unit)}"
                        }
                    ]
                },
                {
                    "name": "brush_zoom_delta",
                    "on": [
                        {
                            "events": [
                                {
                                    "source": "scope",
                                    "type": "wheel",
                                    "consume": true,
                                    "markname": "brush_brush"
                                }
                            ],
                            "force": true,
                            "update": "pow(1.001, event.deltaY * pow(16, event.deltaMode))"
                        }
                    ]
                },
                {
                    "name": "brush_modify",
                    "on": [
                        {
                            "events": { "signal": "brush_tuple" },
                            "update": "modify(\"brush_store\", brush_tuple, true)"
                        }
                    ]
                }
            ],
            "marks": [
                {
                    "name": "brush_brush_bg",
                    "type": "rect",
                    "clip": true,
                    "encode": {
                        "enter": {
                            "fill": { "value": "#333" },
                            "fillOpacity": { "value": 0.125 }
                        },
                        "update": {
                            "x": [
                                {
                                    "test": "data(\"brush_store\").length && data(\"brush_store\")[0].unit === \"child__column_distance_layer_0\"",
                                    "signal": "brush_x[0]"
                                },
                                { "value": 0 }
                            ],
                            "y": [
                                {
                                    "test": "data(\"brush_store\").length && data(\"brush_store\")[0].unit === \"child__column_distance_layer_0\"",
                                    "value": 0
                                },
                                { "value": 0 }
                            ],
                            "x2": [
                                {
                                    "test": "data(\"brush_store\").length && data(\"brush_store\")[0].unit === \"child__column_distance_layer_0\"",
                                    "signal": "brush_x[1]"
                                },
                                { "value": 0 }
                            ],
                            "y2": [
                                {
                                    "test": "data(\"brush_store\").length && data(\"brush_store\")[0].unit === \"child__column_distance_layer_0\"",
                                    "field": { "group": "height" }
                                },
                                { "value": 0 }
                            ]
                        }
                    }
                },
                {
                    "name": "child__column_distance_layer_0_marks",
                    "type": "rect",
                    "style": ["bar"],
                    "interactive": true,
                    "from": { "data": "data_6" },
                    "encode": {
                        "update": {
                            "fill": { "value": "#ddd" },
                            "ariaRoleDescription": { "value": "bar" },
                            "description": {
                                "signal": "\"distance (binned): \" + (!isValid(datum[\"bin_maxbins_20_distance\"]) || !isFinite(+datum[\"bin_maxbins_20_distance\"]) ? \"null\" : format(datum[\"bin_maxbins_20_distance\"], \"\") + \" – \" + format(datum[\"bin_maxbins_20_distance_end\"], \"\")) + \"; Count of Records: \" + (format(datum[\"__count\"], \"\"))"
                            },
                            "x2": {
                                "scale": "child__column_distance_x",
                                "field": "bin_maxbins_20_distance",
                                "offset": 1
                            },
                            "x": {
                                "scale": "child__column_distance_x",
                                "field": "bin_maxbins_20_distance_end"
                            },
                            "y": { "scale": "child__column_distance_y", "field": "__count" },
                            "y2": { "scale": "child__column_distance_y", "value": 0 }
                        }
                    }
                },
                {
                    "name": "child__column_distance_layer_1_marks",
                    "type": "rect",
                    "style": ["bar"],
                    "interactive": false,
                    "from": { "data": "data_5" },
                    "encode": {
                        "update": {
                            "fill": { "value": "#4c78a8" },
                            "ariaRoleDescription": { "value": "bar" },
                            "description": {
                                "signal": "\"distance (binned): \" + (!isValid(datum[\"bin_maxbins_20_distance\"]) || !isFinite(+datum[\"bin_maxbins_20_distance\"]) ? \"null\" : format(datum[\"bin_maxbins_20_distance\"], \"\") + \" – \" + format(datum[\"bin_maxbins_20_distance_end\"], \"\")) + \"; Count of Records: \" + (format(datum[\"__count\"], \"\"))"
                            },
                            "x2": {
                                "scale": "child__column_distance_x",
                                "field": "bin_maxbins_20_distance",
                                "offset": 1
                            },
                            "x": {
                                "scale": "child__column_distance_x",
                                "field": "bin_maxbins_20_distance_end"
                            },
                            "y": { "scale": "child__column_distance_y", "field": "__count" },
                            "y2": { "scale": "child__column_distance_y", "value": 0 }
                        }
                    }
                },
                {
                    "name": "brush_brush",
                    "type": "rect",
                    "clip": true,
                    "encode": {
                        "enter": { "fill": { "value": "transparent" } },
                        "update": {
                            "x": [
                                {
                                    "test": "data(\"brush_store\").length && data(\"brush_store\")[0].unit === \"child__column_distance_layer_0\"",
                                    "signal": "brush_x[0]"
                                },
                                { "value": 0 }
                            ],
                            "y": [
                                {
                                    "test": "data(\"brush_store\").length && data(\"brush_store\")[0].unit === \"child__column_distance_layer_0\"",
                                    "value": 0
                                },
                                { "value": 0 }
                            ],
                            "x2": [
                                {
                                    "test": "data(\"brush_store\").length && data(\"brush_store\")[0].unit === \"child__column_distance_layer_0\"",
                                    "signal": "brush_x[1]"
                                },
                                { "value": 0 }
                            ],
                            "y2": [
                                {
                                    "test": "data(\"brush_store\").length && data(\"brush_store\")[0].unit === \"child__column_distance_layer_0\"",
                                    "field": { "group": "height" }
                                },
                                { "value": 0 }
                            ],
                            "stroke": [
                                { "test": "brush_x[0] !== brush_x[1]", "value": "white" },
                                { "value": null }
                            ]
                        }
                    }
                }
            ],
            "axes": [
                {
                    "scale": "child__column_distance_y",
                    "orient": "left",
                    "gridScale": "child__column_distance_x",
                    "grid": true,
                    "tickCount": { "signal": "ceil(childHeight/40)" },
                    "domain": false,
                    "labels": false,
                    "aria": false,
                    "maxExtent": 0,
                    "minExtent": 0,
                    "ticks": false,
                    "zindex": 0
                },
                {
                    "scale": "child__column_distance_x",
                    "orient": "bottom",
                    "grid": false,
                    "title": "distance (binned)",
                    "labelFlush": true,
                    "labelOverlap": true,
                    "tickCount": { "signal": "ceil(childWidth/10)" },
                    "zindex": 0
                },
                {
                    "scale": "child__column_distance_y",
                    "orient": "left",
                    "grid": false,
                    "title": "Count of Records",
                    "labelOverlap": true,
                    "tickCount": { "signal": "ceil(childHeight/40)" },
                    "zindex": 0
                }
            ]
        },
        {
            "type": "group",
            "name": "child__column_delay_group",
            "style": "cell",
            "encode": {
                "update": {
                    "width": { "signal": "childWidth" },
                    "height": { "signal": "childHeight" }
                }
            },
            "signals": [
                {
                    "name": "brush_x",
                    "value": [],
                    "on": [
                        {
                            "events": {
                                "source": "scope",
                                "type": "mousedown",
                                "filter": [
                                    "!event.item || event.item.mark.name !== \"brush_brush\""
                                ]
                            },
                            "update": "[x(unit), x(unit)]"
                        },
                        {
                            "events": {
                                "source": "window",
                                "type": "mousemove",
                                "consume": true,
                                "between": [
                                    {
                                        "source": "scope",
                                        "type": "mousedown",
                                        "filter": [
                                            "!event.item || event.item.mark.name !== \"brush_brush\""
                                        ]
                                    },
                                    { "source": "window", "type": "mouseup" }
                                ]
                            },
                            "update": "[brush_x[0], clamp(x(unit), 0, childWidth)]"
                        },
                        {
                            "events": { "signal": "brush_scale_trigger" },
                            "update": "[scale(\"child__column_delay_x\", brush_delay[0]), scale(\"child__column_delay_x\", brush_delay[1])]"
                        },
                        {
                            "events": [{ "source": "view", "type": "dblclick" }],
                            "update": "[0, 0]"
                        },
                        {
                            "events": { "signal": "brush_translate_delta" },
                            "update": "clampRange(panLinear(brush_translate_anchor.extent_x, brush_translate_delta.x / span(brush_translate_anchor.extent_x)), 0, childWidth)"
                        },
                        {
                            "events": { "signal": "brush_zoom_delta" },
                            "update": "clampRange(zoomLinear(brush_x, brush_zoom_anchor.x, brush_zoom_delta), 0, childWidth)"
                        }
                    ]
                },
                {
                    "name": "brush_delay",
                    "on": [
                        {
                            "events": { "signal": "brush_x" },
                            "update": "brush_x[0] === brush_x[1] ? null : invert(\"child__column_delay_x\", brush_x)"
                        }
                    ]
                },
                {
                    "name": "brush_scale_trigger",
                    "value": {},
                    "on": [
                        {
                            "events": [{ "scale": "child__column_delay_x" }],
                            "update": "(!isArray(brush_delay) || (+invert(\"child__column_delay_x\", brush_x)[0] === +brush_delay[0] && +invert(\"child__column_delay_x\", brush_x)[1] === +brush_delay[1])) ? brush_scale_trigger : {}"
                        }
                    ]
                },
                {
                    "name": "brush_tuple",
                    "on": [
                        {
                            "events": [{ "signal": "brush_delay" }],
                            "update": "brush_delay ? {unit: \"child__column_delay_layer_0\", fields: brush_tuple_fields, values: [brush_delay]} : null"
                        }
                    ]
                },
                {
                    "name": "brush_tuple_fields",
                    "value": [{ "field": "delay", "channel": "x", "type": "R" }]
                },
                {
                    "name": "brush_translate_anchor",
                    "value": {},
                    "on": [
                        {
                            "events": [
                                {
                                    "source": "scope",
                                    "type": "mousedown",
                                    "markname": "brush_brush"
                                }
                            ],
                            "update": "{x: x(unit), y: y(unit), extent_x: slice(brush_x)}"
                        }
                    ]
                },
                {
                    "name": "brush_translate_delta",
                    "value": {},
                    "on": [
                        {
                            "events": [
                                {
                                    "source": "window",
                                    "type": "mousemove",
                                    "consume": true,
                                    "between": [
                                        {
                                            "source": "scope",
                                            "type": "mousedown",
                                            "markname": "brush_brush"
                                        },
                                        { "source": "window", "type": "mouseup" }
                                    ]
                                }
                            ],
                            "update": "{x: brush_translate_anchor.x - x(unit), y: brush_translate_anchor.y - y(unit)}"
                        }
                    ]
                },
                {
                    "name": "brush_zoom_anchor",
                    "on": [
                        {
                            "events": [
                                {
                                    "source": "scope",
                                    "type": "wheel",
                                    "consume": true,
                                    "markname": "brush_brush"
                                }
                            ],
                            "update": "{x: x(unit), y: y(unit)}"
                        }
                    ]
                },
                {
                    "name": "brush_zoom_delta",
                    "on": [
                        {
                            "events": [
                                {
                                    "source": "scope",
                                    "type": "wheel",
                                    "consume": true,
                                    "markname": "brush_brush"
                                }
                            ],
                            "force": true,
                            "update": "pow(1.001, event.deltaY * pow(16, event.deltaMode))"
                        }
                    ]
                },
                {
                    "name": "brush_modify",
                    "on": [
                        {
                            "events": { "signal": "brush_tuple" },
                            "update": "modify(\"brush_store\", brush_tuple, true)"
                        }
                    ]
                }
            ],
            "marks": [
                {
                    "name": "brush_brush_bg",
                    "type": "rect",
                    "clip": true,
                    "encode": {
                        "enter": {
                            "fill": { "value": "#333" },
                            "fillOpacity": { "value": 0.125 }
                        },
                        "update": {
                            "x": [
                                {
                                    "test": "data(\"brush_store\").length && data(\"brush_store\")[0].unit === \"child__column_delay_layer_0\"",
                                    "signal": "brush_x[0]"
                                },
                                { "value": 0 }
                            ],
                            "y": [
                                {
                                    "test": "data(\"brush_store\").length && data(\"brush_store\")[0].unit === \"child__column_delay_layer_0\"",
                                    "value": 0
                                },
                                { "value": 0 }
                            ],
                            "x2": [
                                {
                                    "test": "data(\"brush_store\").length && data(\"brush_store\")[0].unit === \"child__column_delay_layer_0\"",
                                    "signal": "brush_x[1]"
                                },
                                { "value": 0 }
                            ],
                            "y2": [
                                {
                                    "test": "data(\"brush_store\").length && data(\"brush_store\")[0].unit === \"child__column_delay_layer_0\"",
                                    "field": { "group": "height" }
                                },
                                { "value": 0 }
                            ]
                        }
                    }
                },
                {
                    "name": "child__column_delay_layer_0_marks",
                    "type": "rect",
                    "style": ["bar"],
                    "interactive": true,
                    "from": { "data": "data_7" },
                    "encode": {
                        "update": {
                            "fill": { "value": "#ddd" },
                            "ariaRoleDescription": { "value": "bar" },
                            "description": {
                                "signal": "\"delay (binned): \" + (!isValid(datum[\"bin_maxbins_20_delay\"]) || !isFinite(+datum[\"bin_maxbins_20_delay\"]) ? \"null\" : format(datum[\"bin_maxbins_20_delay\"], \"\") + \" – \" + format(datum[\"bin_maxbins_20_delay_end\"], \"\")) + \"; Count of Records: \" + (format(datum[\"__count\"], \"\"))"
                            },
                            "x2": {
                                "scale": "child__column_delay_x",
                                "field": "bin_maxbins_20_delay",
                                "offset": 1
                            },
                            "x": {
                                "scale": "child__column_delay_x",
                                "field": "bin_maxbins_20_delay_end"
                            },
                            "y": { "scale": "child__column_delay_y", "field": "__count" },
                            "y2": { "scale": "child__column_delay_y", "value": 0 }
                        }
                    }
                },
                {
                    "name": "child__column_delay_layer_1_marks",
                    "type": "rect",
                    "style": ["bar"],
                    "interactive": false,
                    "from": { "data": "data_4" },
                    "encode": {
                        "update": {
                            "fill": { "value": "#4c78a8" },
                            "ariaRoleDescription": { "value": "bar" },
                            "description": {
                                "signal": "\"delay (binned): \" + (!isValid(datum[\"bin_maxbins_20_delay\"]) || !isFinite(+datum[\"bin_maxbins_20_delay\"]) ? \"null\" : format(datum[\"bin_maxbins_20_delay\"], \"\") + \" – \" + format(datum[\"bin_maxbins_20_delay_end\"], \"\")) + \"; Count of Records: \" + (format(datum[\"__count\"], \"\"))"
                            },
                            "x2": {
                                "scale": "child__column_delay_x",
                                "field": "bin_maxbins_20_delay",
                                "offset": 1
                            },
                            "x": {
                                "scale": "child__column_delay_x",
                                "field": "bin_maxbins_20_delay_end"
                            },
                            "y": { "scale": "child__column_delay_y", "field": "__count" },
                            "y2": { "scale": "child__column_delay_y", "value": 0 }
                        }
                    }
                },
                {
                    "name": "brush_brush",
                    "type": "rect",
                    "clip": true,
                    "encode": {
                        "enter": { "fill": { "value": "transparent" } },
                        "update": {
                            "x": [
                                {
                                    "test": "data(\"brush_store\").length && data(\"brush_store\")[0].unit === \"child__column_delay_layer_0\"",
                                    "signal": "brush_x[0]"
                                },
                                { "value": 0 }
                            ],
                            "y": [
                                {
                                    "test": "data(\"brush_store\").length && data(\"brush_store\")[0].unit === \"child__column_delay_layer_0\"",
                                    "value": 0
                                },
                                { "value": 0 }
                            ],
                            "x2": [
                                {
                                    "test": "data(\"brush_store\").length && data(\"brush_store\")[0].unit === \"child__column_delay_layer_0\"",
                                    "signal": "brush_x[1]"
                                },
                                { "value": 0 }
                            ],
                            "y2": [
                                {
                                    "test": "data(\"brush_store\").length && data(\"brush_store\")[0].unit === \"child__column_delay_layer_0\"",
                                    "field": { "group": "height" }
                                },
                                { "value": 0 }
                            ],
                            "stroke": [
                                { "test": "brush_x[0] !== brush_x[1]", "value": "white" },
                                { "value": null }
                            ]
                        }
                    }
                }
            ],
            "axes": [
                {
                    "scale": "child__column_delay_y",
                    "orient": "left",
                    "gridScale": "child__column_delay_x",
                    "grid": true,
                    "tickCount": { "signal": "ceil(childHeight/40)" },
                    "domain": false,
                    "labels": false,
                    "aria": false,
                    "maxExtent": 0,
                    "minExtent": 0,
                    "ticks": false,
                    "zindex": 0
                },
                {
                    "scale": "child__column_delay_x",
                    "orient": "bottom",
                    "grid": false,
                    "title": "delay (binned)",
                    "labelFlush": true,
                    "labelOverlap": true,
                    "tickCount": { "signal": "ceil(childWidth/10)" },
                    "zindex": 0
                },
                {
                    "scale": "child__column_delay_y",
                    "orient": "left",
                    "grid": false,
                    "title": "Count of Records",
                    "labelOverlap": true,
                    "tickCount": { "signal": "ceil(childHeight/40)" },
                    "zindex": 0
                }
            ]
        },
        {
            "type": "group",
            "name": "child__column_time_group",
            "style": "cell",
            "encode": {
                "update": {
                    "width": { "signal": "childWidth" },
                    "height": { "signal": "childHeight" }
                }
            },
            "signals": [
                {
                    "name": "brush_x",
                    "value": [],
                    "on": [
                        {
                            "events": {
                                "source": "scope",
                                "type": "mousedown",
                                "filter": [
                                    "!event.item || event.item.mark.name !== \"brush_brush\""
                                ]
                            },
                            "update": "[x(unit), x(unit)]"
                        },
                        {
                            "events": {
                                "source": "window",
                                "type": "mousemove",
                                "consume": true,
                                "between": [
                                    {
                                        "source": "scope",
                                        "type": "mousedown",
                                        "filter": [
                                            "!event.item || event.item.mark.name !== \"brush_brush\""
                                        ]
                                    },
                                    { "source": "window", "type": "mouseup" }
                                ]
                            },
                            "update": "[brush_x[0], clamp(x(unit), 0, childWidth)]"
                        },
                        {
                            "events": { "signal": "brush_scale_trigger" },
                            "update": "[scale(\"child__column_time_x\", brush_time[0]), scale(\"child__column_time_x\", brush_time[1])]"
                        },
                        {
                            "events": [{ "source": "view", "type": "dblclick" }],
                            "update": "[0, 0]"
                        },
                        {
                            "events": { "signal": "brush_translate_delta" },
                            "update": "clampRange(panLinear(brush_translate_anchor.extent_x, brush_translate_delta.x / span(brush_translate_anchor.extent_x)), 0, childWidth)"
                        },
                        {
                            "events": { "signal": "brush_zoom_delta" },
                            "update": "clampRange(zoomLinear(brush_x, brush_zoom_anchor.x, brush_zoom_delta), 0, childWidth)"
                        }
                    ]
                },
                {
                    "name": "brush_time",
                    "on": [
                        {
                            "events": { "signal": "brush_x" },
                            "update": "brush_x[0] === brush_x[1] ? null : invert(\"child__column_time_x\", brush_x)"
                        }
                    ]
                },
                {
                    "name": "brush_scale_trigger",
                    "value": {},
                    "on": [
                        {
                            "events": [{ "scale": "child__column_time_x" }],
                            "update": "(!isArray(brush_time) || (+invert(\"child__column_time_x\", brush_x)[0] === +brush_time[0] && +invert(\"child__column_time_x\", brush_x)[1] === +brush_time[1])) ? brush_scale_trigger : {}"
                        }
                    ]
                },
                {
                    "name": "brush_tuple",
                    "on": [
                        {
                            "events": [{ "signal": "brush_time" }],
                            "update": "brush_time ? {unit: \"child__column_time_layer_0\", fields: brush_tuple_fields, values: [brush_time]} : null"
                        }
                    ]
                },
                {
                    "name": "brush_tuple_fields",
                    "value": [{ "field": "time", "channel": "x", "type": "R" }]
                },
                {
                    "name": "brush_translate_anchor",
                    "value": {},
                    "on": [
                        {
                            "events": [
                                {
                                    "source": "scope",
                                    "type": "mousedown",
                                    "markname": "brush_brush"
                                }
                            ],
                            "update": "{x: x(unit), y: y(unit), extent_x: slice(brush_x)}"
                        }
                    ]
                },
                {
                    "name": "brush_translate_delta",
                    "value": {},
                    "on": [
                        {
                            "events": [
                                {
                                    "source": "window",
                                    "type": "mousemove",
                                    "consume": true,
                                    "between": [
                                        {
                                            "source": "scope",
                                            "type": "mousedown",
                                            "markname": "brush_brush"
                                        },
                                        { "source": "window", "type": "mouseup" }
                                    ]
                                }
                            ],
                            "update": "{x: brush_translate_anchor.x - x(unit), y: brush_translate_anchor.y - y(unit)}"
                        }
                    ]
                },
                {
                    "name": "brush_zoom_anchor",
                    "on": [
                        {
                            "events": [
                                {
                                    "source": "scope",
                                    "type": "wheel",
                                    "consume": true,
                                    "markname": "brush_brush"
                                }
                            ],
                            "update": "{x: x(unit), y: y(unit)}"
                        }
                    ]
                },
                {
                    "name": "brush_zoom_delta",
                    "on": [
                        {
                            "events": [
                                {
                                    "source": "scope",
                                    "type": "wheel",
                                    "consume": true,
                                    "markname": "brush_brush"
                                }
                            ],
                            "force": true,
                            "update": "pow(1.001, event.deltaY * pow(16, event.deltaMode))"
                        }
                    ]
                },
                {
                    "name": "brush_modify",
                    "on": [
                        {
                            "events": { "signal": "brush_tuple" },
                            "update": "modify(\"brush_store\", brush_tuple, true)"
                        }
                    ]
                }
            ],
            "marks": [
                {
                    "name": "brush_brush_bg",
                    "type": "rect",
                    "clip": true,
                    "encode": {
                        "enter": {
                            "fill": { "value": "#333" },
                            "fillOpacity": { "value": 0.125 }
                        },
                        "update": {
                            "x": [
                                {
                                    "test": "data(\"brush_store\").length && data(\"brush_store\")[0].unit === \"child__column_time_layer_0\"",
                                    "signal": "brush_x[0]"
                                },
                                { "value": 0 }
                            ],
                            "y": [
                                {
                                    "test": "data(\"brush_store\").length && data(\"brush_store\")[0].unit === \"child__column_time_layer_0\"",
                                    "value": 0
                                },
                                { "value": 0 }
                            ],
                            "x2": [
                                {
                                    "test": "data(\"brush_store\").length && data(\"brush_store\")[0].unit === \"child__column_time_layer_0\"",
                                    "signal": "brush_x[1]"
                                },
                                { "value": 0 }
                            ],
                            "y2": [
                                {
                                    "test": "data(\"brush_store\").length && data(\"brush_store\")[0].unit === \"child__column_time_layer_0\"",
                                    "field": { "group": "height" }
                                },
                                { "value": 0 }
                            ]
                        }
                    }
                },
                {
                    "name": "child__column_time_layer_0_marks",
                    "type": "rect",
                    "style": ["bar"],
                    "interactive": true,
                    "from": { "data": "data_2" },
                    "encode": {
                        "update": {
                            "fill": { "value": "#ddd" },
                            "ariaRoleDescription": { "value": "bar" },
                            "description": {
                                "signal": "\"time (binned): \" + (!isValid(datum[\"bin_maxbins_20_time\"]) || !isFinite(+datum[\"bin_maxbins_20_time\"]) ? \"null\" : format(datum[\"bin_maxbins_20_time\"], \"\") + \" – \" + format(datum[\"bin_maxbins_20_time_end\"], \"\")) + \"; Count of Records: \" + (format(datum[\"__count\"], \"\"))"
                            },
                            "x2": {
                                "scale": "child__column_time_x",
                                "field": "bin_maxbins_20_time",
                                "offset": 1
                            },
                            "x": {
                                "scale": "child__column_time_x",
                                "field": "bin_maxbins_20_time_end"
                            },
                            "y": { "scale": "child__column_time_y", "field": "__count" },
                            "y2": { "scale": "child__column_time_y", "value": 0 }
                        }
                    }
                },
                {
                    "name": "child__column_time_layer_1_marks",
                    "type": "rect",
                    "style": ["bar"],
                    "interactive": false,
                    "from": { "data": "data_1" },
                    "encode": {
                        "update": {
                            "fill": { "value": "#4c78a8" },
                            "ariaRoleDescription": { "value": "bar" },
                            "description": {
                                "signal": "\"time (binned): \" + (!isValid(datum[\"bin_maxbins_20_time\"]) || !isFinite(+datum[\"bin_maxbins_20_time\"]) ? \"null\" : format(datum[\"bin_maxbins_20_time\"], \"\") + \" – \" + format(datum[\"bin_maxbins_20_time_end\"], \"\")) + \"; Count of Records: \" + (format(datum[\"__count\"], \"\"))"
                            },
                            "x2": {
                                "scale": "child__column_time_x",
                                "field": "bin_maxbins_20_time",
                                "offset": 1
                            },
                            "x": {
                                "scale": "child__column_time_x",
                                "field": "bin_maxbins_20_time_end"
                            },
                            "y": { "scale": "child__column_time_y", "field": "__count" },
                            "y2": { "scale": "child__column_time_y", "value": 0 }
                        }
                    }
                },
                {
                    "name": "brush_brush",
                    "type": "rect",
                    "clip": true,
                    "encode": {
                        "enter": { "fill": { "value": "transparent" } },
                        "update": {
                            "x": [
                                {
                                    "test": "data(\"brush_store\").length && data(\"brush_store\")[0].unit === \"child__column_time_layer_0\"",
                                    "signal": "brush_x[0]"
                                },
                                { "value": 0 }
                            ],
                            "y": [
                                {
                                    "test": "data(\"brush_store\").length && data(\"brush_store\")[0].unit === \"child__column_time_layer_0\"",
                                    "value": 0
                                },
                                { "value": 0 }
                            ],
                            "x2": [
                                {
                                    "test": "data(\"brush_store\").length && data(\"brush_store\")[0].unit === \"child__column_time_layer_0\"",
                                    "signal": "brush_x[1]"
                                },
                                { "value": 0 }
                            ],
                            "y2": [
                                {
                                    "test": "data(\"brush_store\").length && data(\"brush_store\")[0].unit === \"child__column_time_layer_0\"",
                                    "field": { "group": "height" }
                                },
                                { "value": 0 }
                            ],
                            "stroke": [
                                { "test": "brush_x[0] !== brush_x[1]", "value": "white" },
                                { "value": null }
                            ]
                        }
                    }
                }
            ],
            "axes": [
                {
                    "scale": "child__column_time_y",
                    "orient": "left",
                    "gridScale": "child__column_time_x",
                    "grid": true,
                    "tickCount": { "signal": "ceil(childHeight/40)" },
                    "domain": false,
                    "labels": false,
                    "aria": false,
                    "maxExtent": 0,
                    "minExtent": 0,
                    "ticks": false,
                    "zindex": 0
                },
                {
                    "scale": "child__column_time_x",
                    "orient": "bottom",
                    "grid": false,
                    "title": "time (binned)",
                    "labelFlush": true,
                    "labelOverlap": true,
                    "tickCount": { "signal": "ceil(childWidth/10)" },
                    "zindex": 0
                },
                {
                    "scale": "child__column_time_y",
                    "orient": "left",
                    "grid": false,
                    "title": "Count of Records",
                    "labelOverlap": true,
                    "tickCount": { "signal": "ceil(childHeight/40)" },
                    "zindex": 0
                }
            ]
        }
    ],
    "scales": [
        {
            "name": "child__column_distance_x",
            "type": "linear",
            "domain": {
                "signal": "[child__column_distance_layer_0_bin_maxbins_20_distance_bins.start, child__column_distance_layer_0_bin_maxbins_20_distance_bins.stop]"
            },
            "range": [0, { "signal": "childWidth" }],
            "bins": {
                "signal": "child__column_distance_layer_0_bin_maxbins_20_distance_bins"
            },
            "zero": false
        },
        {
            "name": "child__column_distance_y",
            "type": "linear",
            "domain": {
                "fields": [
                    { "data": "data_6", "field": "__count" },
                    { "data": "data_5", "field": "__count" }
                ]
            },
            "range": [{ "signal": "childHeight" }, 0],
            "nice": true,
            "zero": true
        },
        {
            "name": "child__column_delay_x",
            "type": "linear",
            "domain": {
                "signal": "[child__column_delay_layer_1_bin_maxbins_20_delay_bins.start, child__column_delay_layer_1_bin_maxbins_20_delay_bins.stop]"
            },
            "range": [0, { "signal": "childWidth" }],
            "bins": {
                "signal": "child__column_delay_layer_1_bin_maxbins_20_delay_bins"
            },
            "zero": false
        },
        {
            "name": "child__column_delay_y",
            "type": "linear",
            "domain": {
                "fields": [
                    { "data": "data_7", "field": "__count" },
                    { "data": "data_4", "field": "__count" }
                ]
            },
            "range": [{ "signal": "childHeight" }, 0],
            "nice": true,
            "zero": true
        },
        {
            "name": "child__column_time_x",
            "type": "linear",
            "domain": {
                "signal": "[child__column_time_layer_1_bin_maxbins_20_time_bins.start, child__column_time_layer_1_bin_maxbins_20_time_bins.stop]"
            },
            "range": [0, { "signal": "childWidth" }],
            "bins": { "signal": "child__column_time_layer_1_bin_maxbins_20_time_bins" },
            "zero": false
        },
        {
            "name": "child__column_time_y",
            "type": "linear",
            "domain": {
                "fields": [
                    { "data": "data_2", "field": "__count" },
                    { "data": "data_1", "field": "__count" }
                ]
            },
            "range": [{ "signal": "childHeight" }, 0],
            "nice": true,
            "zero": true
        }
    ]
}

init();
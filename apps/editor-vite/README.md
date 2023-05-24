## VegaFusion embedding demo frontend

Installing Protobuf stuff so DevTools is useful:

protoc -I=$DIR echo.proto --js_out=import_style=commonjs:$OUT_DIR --grpc-web_out=import_style=typescript,mode=grpcweb:$OUT_DIR


protoc -I=../../../vegafusion-core/src/proto services.proto --js_out=import_style=commonjs:src/gen --grpc-web_out=import_style=typescript,mode=grpcweb:src/gen

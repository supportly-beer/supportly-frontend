#!/bin/bash
mkdir src/app/protos/generated
cd src/app/protos
protoc --plugin=protoc-gen-ts_proto=$(npm root)/.bin/protoc-gen-ts_proto --js_out="import_style=commonjs,binary:generated/" --ts_out="service=grpc-web:generated/" ticket-chat.proto

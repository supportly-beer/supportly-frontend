#!/bin/bash
protoc --plugin=protoc-gen-ts_proto=$(npm root)/.bin/protoc-gen-ts_proto --js_out="import_style=commonjs,binary:generated/" --ts_out="service=grpc-web:generated/" ticket-chat.proto

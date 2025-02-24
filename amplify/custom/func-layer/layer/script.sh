SCRIPT_DIR="$(dirname "$0")"

npm i --prefix $SCRIPT_DIR
mkdir -p $SCRIPT_DIR/nodejs/node20

cp -r $SCRIPT_DIR/node_modules $SCRIPT_DIR/nodejs/node20
zip -r $SCRIPT_DIR/layer_content.zip $SCRIPT_DIR/nodejs
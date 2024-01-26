from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/ask', methods=['POST'])
def handle_data():
    if request.method == 'POST':
        # Handle POST request
        data = request.json  # Assuming the data is in JSON format
        return jsonify({'data': "hello world"})


if __name__ == '__main__':
    app.run(debug=True)

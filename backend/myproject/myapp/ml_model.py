import joblib
import os

# Define paths to your model and scaler
MODEL_PATH = os.path.join(os.path.dirname(__file__), 'model.joblib')
SCALER_PATH = os.path.join(os.path.dirname(__file__), 'standard_scaler.joblib')

# Load the model and scaler
model = joblib.load(MODEL_PATH)
scaler = joblib.load(SCALER_PATH)

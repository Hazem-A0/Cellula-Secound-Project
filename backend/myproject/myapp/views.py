from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .ml_model import model, scaler
import json
import pandas as pd

@csrf_exempt
def predict(request):
    if request.method == 'POST':
        # Parse JSON request body
        try:
            data = json.loads(request.body)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON'}, status=400)
        
        # Define the correct sequence and extract features
        features = {
            'passenger_count': float(data.get('passenger_count')),
            'weekday': float(data.get('weekday')),
            'pickup_longitude': float(data.get('pickup_longitude')),
            'lga_dist': float(data.get('lga_dist')),
            'dropoff_longitude': float(data.get('dropoff_longitude')),
            'nyc_dist': float(data.get('nyc_dist')),
            'month': float(data.get('month')),
            'dropoff_latitude': float(data.get('dropoff_latitude')),
            'year': float(data.get('year')),
            'ewr_dist': float(data.get('ewr_dist')),
            'pickup_latitude': float(data.get('pickup_latitude')),
            'sol_dist': float(data.get('sol_dist')),
            'distance': float(data.get('distance')),
            'jfk_dist': float(data.get('jfk_dist')),
            'bearing': float(data.get('bearing')),
            'hour': float(data.get('hour'))
        }
        
        # Create a DataFrame
        df = pd.DataFrame([features])
        
        # Scale the features
        scaled_data = scaler.transform(df)
        
        # Predict using the model
        prediction = model.predict(scaled_data)
        
        # Convert prediction to standard Python type (e.g., float)
        prediction_value = float(prediction[0])
        
        return JsonResponse({'prediction': prediction_value})
    return JsonResponse({'error': 'Invalid request method'}, status=405)

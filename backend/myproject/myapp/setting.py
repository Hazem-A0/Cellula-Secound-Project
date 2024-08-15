# settings.py

INSTALLED_APPS = [
    # other apps
    'corsheaders',
    # other apps
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    # other middleware
]

# Allow requests from your frontend development server
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000/Prediction",
    "http://localhost:3000",
    # Add other origins as needed
]

# Optional settings
CORS_ALLOW_CREDENTIALS = True
CORS_ALLOW_HEADERS = [
    'content-type',
    # Add other headers as needed
]
CORS_ALLOW_METHODS = [
    'GET',
    'POST',
    'PUT',
    'PATCH',
    'DELETE',
    'OPTIONS',
]

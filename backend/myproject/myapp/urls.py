from django.urls import path
from . import views

urlpatterns = [
    path('predict/', views.predict, name='predict'),  # URL pattern for prediction
    path('', views.predict, name='home'),  # Optional: Route root URL to predict view
]

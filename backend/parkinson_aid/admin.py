from django.contrib import admin
from .models import Patient, MRIImage

# Register your models here.
admin.site.register(Patient)
admin.site.register(MRIImage)

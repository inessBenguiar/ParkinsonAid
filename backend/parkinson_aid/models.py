from django.db import models


# PATIENT MODEL
class Patient(models.Model):
    GENDER_CHOICES = [
        ('M', 'Male'),
        ('F', 'Female'),
    ]

    name = models.CharField(max_length=100)
    patient_id = models.CharField(max_length=10, unique=True)
    date_of_birth = models.DateField()
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    phone_number = models.CharField(max_length=15)
    email = models.EmailField()
    diagnosis_result = models.CharField(max_length=200)
    description = models.TextField()
    date_of_last_update = models.DateField(auto_now=True)
    doctor_name = models.CharField(max_length=100)

    # Emergency contact information
    emergency_contact_name = models.CharField(max_length=100, null=True, blank=True)
    emergency_relation = models.CharField(max_length=50, null=True, blank=True)
    emergency_phone_number = models.CharField(max_length=15, null=True, blank=True)

    def __str__(self):
        return f"{self.name} (ID: {self.patient_id})"


# MRI IMAGE MODEL
class MRIImage(models.Model):
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE, related_name='mri_images')
    image = models.ImageField(upload_to='mri_images/')
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"MRI Image for {self.patient.name} uploaded on {self.uploaded_at}"

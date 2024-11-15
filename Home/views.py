from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def index(request):
    context={"firstname":"amirali","lastname":"daghyanous","email":"amirali_098@yahoo.com","phone_number":"+989371491918"}
   
    return render(request, 'index.html',context)
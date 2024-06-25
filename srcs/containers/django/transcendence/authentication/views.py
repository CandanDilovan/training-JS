from django.shortcuts import render
from authentication.forms import LoginForm


# Create your views here.
def authentication(request):
    return render(request, 'index.html')

def login_popup(request):
    context = {
        'login_form': LoginForm,
    }
    return render(request, 'authentication/login_popup.html', context)

def registration_popup(request):
    return render(request, 'authentication/registration_popup.html')

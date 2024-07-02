from django.shortcuts import render
from authentication.forms import LoginForm
from django.http import HttpResponse
from django.contrib.auth import login, authenticate, logout


# Create your views here.
def authentication(request):
    # logout(request)
    if (request.user.is_authenticated):
        return render(request, 'authentication/game.html')
    else:
       return render(request, 'authentication/auth_page.html')

def login_popup(request):
    context = {
        'login_form': LoginForm,
    }
    print(request.user)
    return render(request, 'authentication/login_popup.html', context)

def registration_popup(request):
    return render(request, 'authentication/registration_popup.html')

def login_session(request):
    if (request.method == 'POST'):
        form = LoginForm(request.POST)
        if (form.is_valid()):
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user = authenticate(username=username, password=password)
            print(request.POST['username'])
            print(request.POST['password'])
            if user is not None:
                login(request, user)
                return (render(request, 'authentication/game.html'))
            else:
                return (HttpResponse('Error'))

def logout_btn(request):
    logout(request)
    return render(request, 'authentication/placeholder.html')

def game(request):
    return render(request, 'authentication/canvas.html')

from django.shortcuts import render


# Create your views here.
def authentication(request):
    return render(request, 'index.html')


# def registration(request):
#     return render(request, 'registration.html')


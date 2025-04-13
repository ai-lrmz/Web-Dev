from django.urls import path
from . import views

urlpatterns = [
    path('companies/', views.company_list, name='company-list'),  # Получение списка компаний
    path('companies/<int:company_id>/vacancies/', views.VacancyList.as_view(), name='vacancy-list'),  # Получение вакансий по id компании
]

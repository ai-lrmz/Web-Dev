from django.urls import path
from . import views

urlpatterns = [
    # Companies
    path('companies/', views.CompanyListCreateView.as_view(), name='company-list-create'),
    path('companies/<int:pk>/', views.CompanyDetailView.as_view(), name='company-detail'),
    path('companies/<int:id>/vacancies/', views.CompanyVacanciesView.as_view(), name='company-vacancies'),

    # Vacancies
    path('vacancies/', views.VacancyListCreateView.as_view(), name='vacancy-list-create'),
    path('vacancies/<int:pk>/', views.VacancyDetailView.as_view(), name='vacancy-detail'),
    path('vacancies/top_ten/', views.TopTenVacanciesView.as_view(), name='top-ten-vacancies'),
]

from django.http import JsonResponse
from rest_framework import generics
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer

# FBV для получения всех компаний
def company_list(request):
    companies = Company.objects.all()  # Получаем все компании
    serializer = CompanySerializer(companies, many=True)  # Сериализуем компании в формат JSON
    return JsonResponse(serializer.data, safe=False)  # Отправляем данные в ответ

# CBV для получения вакансий по id компании
class VacancyList(generics.ListAPIView):
    serializer_class = VacancySerializer  # Указываем сериализатор для вакансий

    def get_queryset(self):
        company_id = self.kwargs['company_id']  # Получаем company_id из URL
        return Vacancy.objects.filter(company_id=company_id)  # Получаем вакансии для указанной компании

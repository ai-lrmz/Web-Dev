from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer

# Companies
class CompanyListCreateView(APIView):
    def get(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CompanyDetailView(APIView):
    def get(self, request, pk):
        try:
            company = Company.objects.get(pk=pk)
        except Company.DoesNotExist:
            return Response({'error': 'Company not found'}, status=status.HTTP_404_NOT_FOUND)

        serializer = CompanySerializer(company)
        return Response(serializer.data)

class CompanyVacanciesView(APIView):
    def get(self, request, id):
        try:
            company = Company.objects.get(pk=id)
        except Company.DoesNotExist:
            return Response({'error': 'Company not found'}, status=status.HTTP_404_NOT_FOUND)

        vacancies = company.vacancies.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

# Vacancies
class VacancyListCreateView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class VacancyDetailView(APIView):
    def get(self, request, pk):
        try:
            vacancy = Vacancy.objects.get(pk=pk)
        except Vacancy.DoesNotExist:
            return Response({'error': 'Vacancy not found'}, status=status.HTTP_404_NOT_FOUND)

        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)

class TopTenVacanciesView(APIView):
    def get(self, request):
        top_vacancies = Vacancy.objects.order_by('-salary')[:10]
        serializer = VacancySerializer(top_vacancies, many=True)
        return Response(serializer.data)

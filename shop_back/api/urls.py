from django.urls import path
from .views import product_list, product_by_id, category_list, category_by_id, category_products, index

urlpatterns = [
    path('', index),
    path('products/', product_list),
    path('products/<int:product_id>/', product_by_id),
    path('categories/', category_list),
    path('categories/<int:category_id>/', category_by_id),
    path('categories/<int:category_id>/products/', category_products),
]

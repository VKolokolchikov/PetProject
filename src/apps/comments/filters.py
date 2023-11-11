from rest_framework.filters import BaseFilterBackend


class CommentFilter(BaseFilterBackend):

    def filter_queryset(self, request, queryset, view):
        if _id := request.query_params.get('furniture_id'):
            queryset = queryset.filter(furniture_id=_id)
        return queryset

@extends('layouts.dash')

@section('titel')
    <span class="text-muted fw-light">{{ __('services/index.main_titel') }}/</span>{{ __('services/index.sub_titel') }}
@endsection

@section('content')
    <!-- Content -->
    <livewire:services.index-service />
    <!-- / Content -->
@endsection



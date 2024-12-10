@extends('layouts.dash')

@section('titel')
    <span class="text-muted fw-light">{{ __('services/create.main_titel') }}/</span>{{ __('services/create.sub_titel') }}
@endsection

@section('content')
    <!-- Content -->



    @livewire('services.create-service')


    <!-- / Content -->
@endsection

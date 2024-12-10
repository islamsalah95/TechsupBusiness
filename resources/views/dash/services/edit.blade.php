@extends('layouts.dash')

@section('titel')
    <span class="text-muted fw-light">{{ __('services/edit.main_titel') }}/</span>{{ __('services/edit.sub_titel') }}
@endsection

@section('content')
    <!-- Content -->

        @livewire('services.update-service',['services'=>$services])

    <!-- / Content -->
@endsection

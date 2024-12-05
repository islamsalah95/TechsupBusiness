@extends('layouts.dash')

@section('content')
    <!-- Content -->

    <div class="container-xxl flex-grow-1 container-p-y">
        <h4 class="py-3 mb-4"><span class="text-muted fw-light">services /</span> create</h4>
        <div class="card">

        @livewire('services.create-service')


        </div>

    </div>
    <!-- / Content -->
@endsection

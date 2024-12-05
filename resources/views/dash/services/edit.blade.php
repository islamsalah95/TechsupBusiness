@extends('layouts.dash')

@section('content')
    <!-- Content -->

    <div class="container-xxl flex-grow-1 container-p-y">
        <h4 class="py-3 mb-4"><span class="text-muted fw-light">services /</span>update</h4>
        <div class="card">


        @livewire('services.update-service',['services'=>$services])


        </div>

    </div>
    <!-- / Content -->
@endsection

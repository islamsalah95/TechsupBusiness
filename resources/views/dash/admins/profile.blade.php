@extends('layouts.dash')

@section('titel')
    <span class="text-muted fw-light">{{ __('admins/show.main_titel') }}/</span>{{ __('admins/show.sub_titel') }}
@endsection

@section('content')
    <!-- Content -->
     @livewire('admins.profile')
    <!-- / Content -->
@endsection


@push('css')
<link rel="stylesheet" href="{{ asset_url('vendor/libs/dropzone/dropzone.css') }}"/>
@endpush

@push('js')
<script src="{{ asset_url('vendor/libs/dropzone/dropzone.js') }}"></script>
<script src="{{ asset_url('js/forms-file-upload.js') }}"></script>
@endpush
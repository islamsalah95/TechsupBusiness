@extends('layouts.dash')

@section('titel')
    <span class="text-muted fw-light">{{ __('services/index.main_titel') }}/</span>{{ __('services/index.sub_titel') }}
@endsection

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <h1>Roles</h1>
            <a href="{{ route('roles.create') }}" class="btn btn-primary mb-3">Add New Role</a>
            @if(session('success'))
                <div class="alert alert-success">{{ session('success') }}</div>
            @endif
            <div class="card">
                <div class="card-header">
                    <h5 class="mb-0">Roles List</h5>
                </div>


                <livewire:role.tabel>



            </div>
        </div>
    </div>
</div>
@endsection

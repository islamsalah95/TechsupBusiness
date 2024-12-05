@extends('layouts.dash')

@section('titel')
    <span class="text-muted fw-light">{{ __('services/index.main_titel') }}/</span>{{ __('services/index.sub_titel') }}
@endsection
@section('content')

<div class="container" style="text-align: center; padding-bootom:30px;">
    <div class="row">
        <div class="col-md-12">
            @if(session('success'))
                <div class="alert alert-success">{{ session('success') }}</div>
            @endif
            <div class="card" style="margin-top: 10%;">

                @if (count($errors) > 0)
                <div class="alert alert-danger">
                    <strong>Whoops!</strong> There were some problems with your input.<br><br>
                    <ul>
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif
        
            <form action="{{ route('roles.store') }}" method="POST">
                @csrf
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12" style="height: 40px"></div>
                    <div class="col-xs-4 col-sm-4 col-md-4"></div>
                    <div class="col-xs-4 col-sm-4 col-md-4">
                        <div class="form-group">
                            <strong>Role Name:</strong>
                            <input type="text" name="name" class="form-control" placeholder="Name">
                        </div>
                    </div>
                    <div class="col-xs-4 col-sm-4 col-md-4"></div>
                    <div class="col-xs-12 col-sm-12 col-md-12" style="height: 40px"></div>

                    <div class="col-xs-12 col-sm-12 col-md-12">
                        <div class="form-group">
                            <strong>Permission:</strong>
                            <br />
                            <div class="row">
                                @foreach ($permissions->groupBy(function($permission) {
                                    return substr($permission->name, 0, strpos($permission->name, '-'));
                                }) as $type => $permissions)
                                    <div class="col-md-3" style="padding-bottom: 20px;">
                                        <div class="card">
                                            <div class="card-body">
                                                <h3 style="font-weight: bold; text-align: center;">{{ ucfirst($type) }}</h3>
                                                @foreach ($permissions->take(4) as $permission)
                                                    <div class="form-check">
                                                        <input type="checkbox" name="permission[]" value="{{ $permission->id }}" class="form-check-input">
                                                        <label class="form-check-label">
                                                            {{ $permission->name }}
                                                        </label>
                                                    </div>
                                                @endforeach
                                            </div>
                                        </div>
                                    </div>
                                @endforeach
                            </div>
                        </div>
                    </div>
                
                    <div class="col-xs-12 col-sm-12 col-md-12 text-center">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </div>
                
            </form>


            </div>
        </div>
    </div>
</div>

@endsection

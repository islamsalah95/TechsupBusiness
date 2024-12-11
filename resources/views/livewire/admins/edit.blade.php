<div class="container mt-5">
    <div class="col-md mb-4 mb-md-0">
        <div class="card">
            <div class="card-body">
                <form wire:submit.prevent="submit" method="POST" class="browser-default-validation">
                    @csrf

                    <!-- Name (Arabic) -->
                    <div class="mb-3">
                        <label for="name_ar" class="form-label">{{ __('admins/edit.labels.name_ar') }}</label>
                        <input type="text" id="name_ar"
                            class="form-control @error('name_ar') is-invalid @enderror setDir" wire:model="name_ar"
                            placeholder="{{ __('admins/edit.placeholders.name_ar') }}">
                        @error('name_ar')
                            <div class="invalid-feedback">{{ $message }}</div>
                        @enderror
                    </div>

                    <!-- Name (English) -->
                    <div class="mb-3">
                        <label for="name_en" class="form-label">{{ __('admins/edit.labels.name_en') }}</label>
                        <input type="text" id="name_en" class="form-control @error('name_en') is-invalid @enderror"
                            wire:model="name_en" placeholder="{{ __('admins/edit.placeholders.name_en') }}">
                        @error('name_en')
                            <div class="invalid-feedback">{{ $message }}</div>
                        @enderror
                    </div>

                    <!-- Email -->
                    <div class="mb-3">
                        <label for="email" class="form-label">{{ __('admins/edit.labels.email') }}</label>
                        <input type="text" id="email" class="form-control @error('email') is-invalid @enderror"
                            wire:model="email" placeholder="{{ __('admins/edit.placeholders.email') }}">
                        @error('email')
                            <div class="invalid-feedback">{{ $message }}</div>
                        @enderror
                    </div>

                    <!-- Role -->
                    <div class="mb-3">
                        <label for="select_role" class="form-label">{{ __('admins/edit.labels.role') }}</label>
                        <select id="select_role" class="form-control @error('select_role') is-invalid @enderror"
                            wire:model="select_role" placeholder="{{ __('admins/edit.placeholders.role') }}">
                            <option value="">{{ __('admins/edit.placeholders.role') }}</option>
                            @foreach ($roles as $role)
                                <option value="{{ $role }}" @selected($role == $select_role)>{{ $role }}
                                </option>
                            @endforeach
                        </select>
                        @error('role')
                            <div class="invalid-feedback">{{ $message }}</div>
                        @enderror
                    </div>

                    <!-- Role -->
                    <div class="mb-3">
                        <label for="reset_password" class="form-label">{{ __('admins/edit.labels.reset_password') }}</label>
                        <select id="reset_password" class="form-control @error('reset_password') is-invalid @enderror"
                            wire:model="reset_password" placeholder="{{ __('admins/edit.placeholders.reset_password') }}">
                            <option value="0" selected>{{ __('admins/edit.labels.reset_password_not_confirm') }}</option>
                            <option value="1">{{ __('admins/edit.labels.reset_password_confirm') }}</option>
                        </select>
                        @error('reset_password')
                            <div class="invalid-feedback">{{ $message }}</div>
                        @enderror
                    </div>

                    <!-- Submit Button -->
                    <div class="row">
                        <div class="col-12" style="display: flex; justify-content: center;">
                            <button type="submit"
                                class="btn btn-primary waves-effect waves-light">{{ __('admins/edit.buttons.save') }}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

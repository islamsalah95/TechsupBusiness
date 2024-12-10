<div class="container mt-5">


    <div class="col-md mb-4 mb-md-0">
        <div class="card">
            <div class="card-body">
                <form wire:submit.prevent="submit" method="POST" class="browser-default-validation">
                    @csrf

                    <!-- Name (Arabic) -->
                    <div class="mb-3">
                        <label for="name_ar" class="form-label">{{ __('services/edit.labels.name_ar') }}</label>
                        <input 
                            type="text" 
                            id="name_ar" 
                            class="form-control @error('name_ar') is-invalid @enderror setDir" 
                            wire:model="name_ar" 
                            placeholder="{{ __('services/edit.placeholders.name_ar') }}"
                        >
                        @error('name_ar') 
                            <div class="invalid-feedback">{{ $message }}</div> 
                        @enderror
                    </div>

                    <!-- Name (English) -->
                    <div class="mb-3">
                        <label for="name_en" class="form-label">{{ __('services/edit.labels.name_en') }}</label>
                        <input 
                            type="text" 
                            id="name_en" 
                            class="form-control @error('name_en') is-invalid @enderror" 
                            wire:model="name_en" 
                            placeholder="{{ __('services/edit.placeholders.name_en') }}"
                        >
                        @error('name_en') 
                            <div class="invalid-feedback">{{ $message }}</div> 
                        @enderror
                    </div>

                    <!-- Slug (Arabic) -->
                    <div class="mb-3">
                        <label for="slug_ar" class="form-label">{{ __('services/edit.labels.slug_ar') }}</label>
                        <input 
                            type="text" 
                            id="slug_ar" 
                            class="form-control @error('slug_ar') is-invalid @enderror setDir" 
                            wire:model="slug_ar" 
                            placeholder="{{ __('services/edit.placeholders.slug_ar') }}"
                        >
                        @error('slug_ar') 
                            <div class="invalid-feedback">{{ $message }}</div> 
                        @enderror
                    </div>

                    <!-- Slug (English) -->
                    <div class="mb-3">
                        <label for="slug_en" class="form-label">{{ __('services/edit.labels.slug_en') }}</label>
                        <input 
                            type="text" 
                            id="slug_en" 
                            class="form-control @error('slug_en') is-invalid @enderror" 
                            wire:model="slug_en" 
                            placeholder="{{ __('services/edit.placeholders.slug_en') }}"
                        >
                        @error('slug_en') 
                            <div class="invalid-feedback">{{ $message }}</div> 
                        @enderror
                    </div>

                    <!-- Submit Button -->
                    <div class="row">
                        <div class="col-12" style="display: flex; justify-content: center;">
                            <button type="submit" class="btn btn-primary waves-effect waves-light">{{ __('services/edit.buttons.save') }}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

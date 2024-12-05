<div class="container mt-5">
    <div>
        @if (session()->has('message'))
            <div class="alert alert-success">
                {{ session('message') }}
            </div>
        @endif
    </div>
    <form wire:submit.prevent="submit" class="p-4 border rounded shadow-sm bg-light">
        <h2 class="text-center mb-4">update Service</h2>

        <!-- Name (Arabic) -->
        <div class="mb-3">
            <label for="name_ar" class="form-label">Service Name (Arabic)</label>
            <input 
                type="text" 
                id="name_ar" 
                class="form-control @error('name_ar') is-invalid @enderror" 
                wire:model="name_ar" 
                placeholder="Enter service name in Arabic"
            >
            @error('name_ar') 
                <div class="invalid-feedback">{{ $message }}</div> 
            @enderror
        </div>

        <!-- Name (English) -->
        <div class="mb-3">
            <label for="name_en" class="form-label">Service Name (English)</label>
            <input 
                type="text" 
                id="name_en" 
                class="form-control @error('name_en') is-invalid @enderror" 
                wire:model="name_en" 
                placeholder="Enter service name in English"
            >
            @error('name_en') 
                <div class="invalid-feedback">{{ $message }}</div> 
            @enderror
        </div>

        <!-- Slug (Arabic) -->
        <div class="mb-3">
            <label for="slug_ar" class="form-label">Slug (Arabic)</label>
            <input 
                type="text" 
                id="slug_ar" 
                class="form-control @error('slug_ar') is-invalid @enderror" 
                wire:model="slug_ar" 
                placeholder="Enter slug in Arabic"
            >
            @error('slug_ar') 
                <div class="invalid-feedback">{{ $message }}</div> 
            @enderror
        </div>

        <!-- Slug (English) -->
        <div class="mb-3">
            <label for="slug_en" class="form-label">Slug (English)</label>
            <input 
                type="text" 
                id="slug_en" 
                class="form-control @error('slug_en') is-invalid @enderror" 
                wire:model="slug_en" 
                placeholder="Enter slug in English"
            >
            @error('slug_en') 
                <div class="invalid-feedback">{{ $message }}</div> 
            @enderror
        </div>


                <!-- staus 0 for inactive and 1 active -->
                <!-- Status Dropdown -->
                <div class="mb-3">
                    <label for="status" class="form-label">Status</label>
                    <select 
                        id="status" 
                        class="form-select @error('status') is-invalid @enderror" 
                        wire:model="status"
                    >
                        <option value="" disabled>Select Status</option>
                        <option value="1" {{ $status == 1 ? 'selected' : '' }}>Active</option>
                        <option value="0" {{ $status == 0 ? 'selected' : '' }}>Inactive</option>
                    </select>
                    @error('status') 
                        <div class="invalid-feedback">{{ $message }}</div> 
                    @enderror
                </div>


        <!-- Submit Button -->
        <div class="d-grid">
            <button type="submit" class="btn btn-primary">Save</button>
        </div>
    </form>
</div>

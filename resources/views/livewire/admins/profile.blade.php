<div class="row">
    <div class="col-md-12">
        <div class="card mb-4">
            <hr class="my-0" />
            <div class="card-body">
                <form wire:submit.prevent="submit" enctype="multipart/form-data">
                    @csrf

                    <div class="row">


                        <div class="col-12">
                            <div class="card mb-4">
                                <div class="card-body">
                                    <div class="needsclick">
                                        <div class="dz-message needsclick">
                                             <div>
                                                Drop files here or click to upload
                                                <span class="note needsclick">(Only image files are allowed.)</span>
                                             </div>
                                             <div>
                                                <img style="max-width: 300px; max-height:300px;" src="{{ $admin->getFirstMediaUrl('profile_image') }}" alt="Profile Image">

                                             </div>
                                        </div>
                                        <div class="fallback">
                                            <input type="file" wire:model="img"  id="imageUpload" />
                                        </div>
                                        <div id="imagePreview" style="margin-top: 20px; text-align: center;">
                                        </div>
                                    </div>
                                    @error('img')
                                        <div class="text-danger">{{ $message }}</div>
                                    @enderror
                                </div>
                            </div>
                        </div>
                        
                        

                        <!-- Form Fields -->
                        <div class="mb-3 col-md-6">
                            <label for="name_ar" class="form-label">Name (Arabic)</label>
                            <input class="form-control" type="text" wire:model="name_ar" id="name_ar" />
                            @error('name_ar')
                                <div class="text-danger">{{ $message }}</div>
                            @enderror
                        </div>

                        <div class="mb-3 col-md-6">
                            <label for="name_en" class="form-label">Name (English)</label>
                            <input class="form-control" type="text" wire:model="name_en" id="name_en" />
                            @error('name_en')
                                <div class="text-danger">{{ $message }}</div>
                            @enderror
                        </div>


                        <div class="mb-3 col-md-6">
                            <label for="password" class="form-label">Password</label>
                            <input class="form-control" type="password" wire:model="password" id="password" />
                            @error('password')
                                <div class="text-danger">{{ $message }}</div>
                            @enderror
                        </div>
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




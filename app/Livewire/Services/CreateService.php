<?php

namespace App\Livewire\Services;

use Livewire\Component;
use App\Models\Services;

class CreateService extends Component
{
    public $name_ar = '';
    public $name_en = '';
    public $slug_ar = '';
    public $slug_en = '';

    protected $rules = [
        'name_ar' => 'required|string|max:255',
        'name_en' => 'required|string|max:255',
        'slug_ar' => 'required|string|max:255|unique:services,slug',
        'slug_en' => 'required|string|max:255|unique:services,slug',
    ];

    public function submit()
    {
        $this->validate();

        // Create the service
        Services::create([
            'name' => json_encode(['ar' => $this->name_ar, 'en' => $this->name_en], JSON_UNESCAPED_UNICODE),
            'slug' => json_encode(['ar' => $this->slug_ar, 'en' => $this->slug_en], JSON_UNESCAPED_UNICODE),
            'status' => 1, // Assuming status is always active
        ]);

        session()->flash('message', 'service successfully created.');

        // Redirect to services list
        return redirect()->to('/' . app()->getLocale() . '/dash/services');
    }

    public function render()
    {
        return view('livewire.services.create-service');
    }
}

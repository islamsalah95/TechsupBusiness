<?php 
namespace App\Livewire\Services;

use Livewire\Component;
use App\Models\Services;

class UpdateService extends Component
{
    public $name_ar = '';
    public $name_en = '';
    public $slug_ar = '';
    public $slug_en = '';

    public $status = '';

    public $services;

    protected $rules = [
        'name_ar' => 'required|string|max:255',
        'name_en' => 'required|string|max:255',
        'slug_ar' => 'required|string|max:255|unique:services,slug',
        'slug_en' => 'required|string|max:255|unique:services,slug',
        'status'  => 'required|integer|in:0,1',
    ];

    public function submit()
    {
        $this->validate();

        // Update the service
        $this->services->update([
            'name' => json_encode(['ar' => $this->name_ar, 'en' => $this->name_en], JSON_UNESCAPED_UNICODE),
            'slug' => json_encode(['ar' => $this->slug_ar, 'en' => $this->slug_en], JSON_UNESCAPED_UNICODE),
            'status' => $this->status, // Assuming status is always active
        ]);

        session()->flash('message', __('share.message.update'));

        return redirectLive('services');
    }

    public function mount($services = null)
    {
        if ($services) {
            $this->services = $services;
            $this->name_ar = json_decode($services->name, true)['ar'] ?? '';
            $this->name_en = json_decode($services->name, true)['en'] ?? '';
            $this->slug_ar = json_decode($services->slug, true)['ar'] ?? '';
            $this->slug_en = json_decode($services->slug, true)['en'] ?? '';
            $this->status =  $services->status ?? '';
        }
    }

    public function render()
    {
        return view('livewire.services.update-service');
    }
}

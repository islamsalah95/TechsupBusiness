<?php

namespace App\Livewire\Services;

use Livewire\Component;
use App\Models\Services;
use Livewire\WithPagination;

class IndexService extends Component
{

    use WithPagination;

    public $search;
    public $select = 10; 

    public function delete($id)
    {
        Services::where('id', $id)->delete();
    
        $this->dispatch('del',message: __('share.message.delete') );


    }


    public function render()
    {
        $query = Services::whereIn('status', [1,0]);
    
        if ($this->search) {
            $query->where(function ($q) {
                $q->whereRaw("JSON_UNQUOTE(JSON_EXTRACT(name,   '$.ar')) LIKE ?", ['%' . $this->search . '%'])
                  ->orWhereRaw("JSON_UNQUOTE(JSON_EXTRACT(name, '$.en')) LIKE ?", ['%' . $this->search . '%'])
                  ->orWhereRaw("JSON_UNQUOTE(JSON_EXTRACT(slug, '$.ar')) LIKE ?", ['%' . $this->search . '%'])
                  ->orWhereRaw("JSON_UNQUOTE(JSON_EXTRACT(slug, '$.en')) LIKE ?", ['%' . $this->search . '%']);
            });
        }
    
        $services = $query->paginate($this->select);
    
        return view('livewire.services.index-service', [
            'services' => $services
        ]);
    }
    
}

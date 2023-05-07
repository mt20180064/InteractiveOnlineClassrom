<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class LekcijaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->resource->id,
            'naziv' => $this->resource->naziv,
            'tezina' => $this->resource->tezina,
            'trajanje' => $this->resource->trajanje,
            'imageUrl' => $this->resource->imageUrl,
            'predmetId' => $this->resource->predmetId
        ];
    }
}
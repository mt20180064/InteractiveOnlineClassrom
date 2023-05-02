<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CasResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'casId' => $this->resource->id,
            'lekcijaId' => $this->resource->lekcijaId,
            'userId' => $this->resource->userId
        ];
    }
}
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \App\Models\Lekcija;

class Predmet extends Model
{
    protected $table = 'predmeti';
    public $primaryKey = 'id';

    public function product()
    {
        return $this->hasMany(Lekcija::class, 'id');
    }
}
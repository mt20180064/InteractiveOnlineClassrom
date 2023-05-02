<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \App\Models\Lekcija;
use \App\Models\User;

class Cas extends Model
{
    protected $table = 'casovi';
    public $primaryKey = 'id';
    protected $fillable = ['lekcijaId', 'userId'];

    public function product()
    {
        return $this->hasMany(Lekcija::class, 'id');
    }

    public function user()
    {
        return $this->hasMany(User::class, 'id');
    }
}
<?php

use Illuminate\Database\Eloquent\Model;

class Accounts extends Model
{
	protected $table = "accounts";
	protected $fillable = [
		'name',
		'surname',
		'email',
		'password'
	];
}
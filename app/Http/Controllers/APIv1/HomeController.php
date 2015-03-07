<?php namespace App\Http\Controllers\APIv1;

use App\Http\Controllers\Controller;

class HomeController extends Controller {

	public function index()
	{
		return env('DB_HOST');
	}

}

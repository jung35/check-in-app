<?php namespace App\Http\Controllers\APIv1;

use App\Http\Controllers\Controller;

use App\Models\Event;

class HomeController extends Controller {

	public function index()
	{
		return Event::orderBy('id', 'desc')->get();
	}

}

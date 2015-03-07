<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersInEventTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('users_in_event', function(Blueprint $table)
		{
			$table->increments('id');
			$table->unsignedInteger('events_id');
			$table->foreign('events_id')->references('id')->on('events');

			$table->integer('small_id');
            $table->boolean('checkin')->default(0);
			
			$table->softDeletes();
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('users_in_event');
	}

}

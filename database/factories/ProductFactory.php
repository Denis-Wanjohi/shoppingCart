<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Support\Str;
use Illuminate\Support\Arr;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $productPrefixes = ['Sweater','Pants','Shirts','Glasses','Hat'];
        $name = $this->faker->company.' '. Arr::random($productPrefixes);
        return [
            'name'=> $name,
            'slug'=> Str::slug($name),
            'description'=>   $this->faker->realText(120),
            'price'=> $this->faker->numberBetween(10000,100000),

        ];
    }
}

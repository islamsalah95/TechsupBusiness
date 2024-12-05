<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Permission;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    private $permissions = [
        'role-list',
        'role-create',
        'role-edit',
        'role-delete',

        'user-list',
        'user-create',
        'user-edit',
        'user-delete',


        'service-list',
        'service-create',
        'service-edit',
        'service-delete',

        'subService-list',
        'subService-create',
        'subService-edit',
        'subService-delete',


        'blog-list',
        'blog-create',
        'blog-edit',
        'blog-delete',

        'advantage-list',
        'advantage-create',
        'advantage-edit',
        'advantage-delete',


        'contact-list',
        'contact-create',
        'contact-edit',
        'contact-delete',


    ];

    public function run(): void
    {
        foreach ($this->permissions as $permission) {
            // Check if the permission already exists before creating it
            if (!Permission::where('name', $permission)->exists()) {
                Permission::create(['name' => $permission]);
            }
        }

                // Create admin User and assign the role to him.
                $user1= User::create([
                    'name' => 'islam',
                    'email' => 'islamm1995@gmail.com',
                    'email_verified_at' => '2024-11-26 15:43:52',
                    'password' => Hash::make("123456789")
                ]);

                $user2=  User::create([
                    'name' => 'admin',
                    'email' => 'admin@gmail.com',
                    'email_verified_at' => '2024-11-26 15:43:52',
                    'password' => Hash::make("123456789")
                ]);

        $role = Role::create(['name' => 'admin']);

        $permissions = Permission::pluck('id', 'id')->all();

        $role->syncPermissions($permissions);

        $user1->assignRole([$role->id]);
        $user2->assignRole([$role->id]);


    }
}

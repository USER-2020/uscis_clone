<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $adminRole = Role::firstOrCreate(['name' => 'admin', 'guard_name' => 'web']);

        $accessDashboardPermission = Permission::firstOrCreate([
            'name' => 'access dashboard',
            'guard_name' => 'web',
        ]);

        $adminRole->givePermissionTo($accessDashboardPermission);
    }
}

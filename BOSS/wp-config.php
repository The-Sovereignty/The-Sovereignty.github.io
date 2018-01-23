<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'theSOVDB');

/** MySQL database username */
define('DB_USER', 'theSOVBoss');

/** MySQL database password */
define('DB_PASSWORD', 'Letmein726');

/** MySQL hostname */
define('DB_HOST', '213.171.200.92');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'Xt~3KgMbu33[=e(4Qkr,.5u |}-p}{TxoSeq+q3>+#8U:_ew=.sM{xj{ZwD@^Rkc');
define('SECURE_AUTH_KEY',  'XDP`u3M5pGVc(ZIi0Q$eH@#H3};xfidj&4o[S>KDTZ2|jvaF|FMN|z(.@skmG+#I');
define('LOGGED_IN_KEY',    'W.9P~6AyWo|+R@!Cz{;]J}%Kf!OjMv3_3]tq_^93-fyI# y?]^|cj>!8fK-KN[e!');
define('NONCE_KEY',        'Avg88JI+[#sD`.d, K`&i4_aGxCT4v-40riXNs;%}1Ef@;&g[G-U=--EWESB-EDt');
define('AUTH_SALT',        ';M]mWnq6@N]uz#x7,q4SOs%|eS/-nv<-5zk*IlfMk#4Ssz_|VC=Jj5Bm>5[yVAee');
define('SECURE_AUTH_SALT', '7b+k*HD[n4e<WZ7-;!df|4+|M}nm&j:Ma87a 2WS|Et.H5Kc.vA]56%ZztG5LKho');
define('LOGGED_IN_SALT',   'BHK)LA9d6Mx]$.F ;xUhO|uNWXF;B;[f3*n_Hyc-PLZajD-^8VhFvIvGjB*&CiZx');
define('NONCE_SALT',       'zRN]{j!x`+fO_?IA6|+j+1)a|t]v>_Qyx8/pK+~_3UuF![D*Icsfl<-}4gmygo,1');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'boss_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

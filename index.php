<?php /* require_once(__DIR__.'\\php\\init.php'); */ ?>
<!DOCTYPE html />
<html lang="en">
    <head>

        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <title>Vue FE Projects</title>

        <link href="/css/transitions.css" rel="stylesheet" />
        <link href="/css/bootstrap.min.css" rel="stylesheet" />

        <script src="/js/jquery-3.5.1.min.js"></script>
        <script>
            var baseUrl = location.origin,
                dataURL = '/vue/data',
                message = { type: 'success', text: '' };
        </script>

        <script src="/js/vue.global.js"></script>
        <script src="/js/vue-router.global.js"></script>
        <script src="/vue/core/helpers.js"></script>

    </head>

    <body>

        <section id="app" class="container-fluid p-0">
            <router-view></router-view>
        </section>

        <script src="/js/bootstrap.bundle.min.js"></script>
        <script>
        <?php if (isset($_SESSION['success'])): ?>
            message.text = '<?= is_array($_SESSION["success"])? implode("<br/>", $_SESSION["success"]): $_SESSION["success"] ?>';
        <?php elseif (isset($_SESSION['fail'])): ?>
            message.text = '<?= is_array($_SESSION["fail"])? implode("<br/>", $_SESSION["fail"]): $_SESSION["fail"] ?>';
            message.type = 'fail';
        <?php elseif (isset($_SESSION["warning"])): ?>
            message.text = '<?= is_array($_SESSION["warning"])? implode("<br/>", $_SESSION["warning"]): $_SESSION["warning"] ?>';
            message.type = 'warning';
        <?php endif; ?>
        </script>
        <script src='./vue/core/app.js' type="module"></script>

    </body>
</html>
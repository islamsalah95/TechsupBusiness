<!-- Core JS -->
<script src="{{ asset_url('vendor/libs/jquery/jquery.js') }}"></script>
<script src="{{ asset_url('vendor/libs/popper/popper.js') }}"></script>
<script src="{{ asset_url('vendor/js/bootstrap.js') }}"></script>
<script src="{{ asset_url('vendor/libs/node-waves/node-waves.js') }}"></script>
<script src="{{ asset_url('vendor/libs/perfect-scrollbar/perfect-scrollbar.js') }}"></script>
<script src="{{ asset_url('vendor/libs/hammer/hammer.js') }}"></script>
<script src="{{ asset_url('vendor/libs/i18n/i18n.js') }}"></script>
<script src="{{ asset_url('vendor/libs/typeahead-js/typeahead.js') }}"></script>
<script src="{{ asset_url('vendor/js/menu.js') }}"></script>

<!-- Vendors JS -->
<script src="{{ asset_url('vendor/libs/apex-charts/apexcharts.js') }}"></script>
<script src="{{ asset_url('vendor/libs/swiper/swiper.js') }}"></script>
<script src="{{ asset_url('vendor/libs/datatables-bs5/datatables-bootstrap5.js') }}"></script>
<script src="{{ asset_url('vendor/libs/flatpickr/flatpickr.js') }}"></script>
<script src="{{ asset_url('vendor/libs/moment/moment.js') }}"></script>

<!-- Form Validation -->
<script src="{{ asset_url('vendor/libs/@form-validation/umd/bundle/popular.min.js') }}"></script>
<script src="{{ asset_url('vendor/libs/@form-validation/umd/plugin-bootstrap5/index.min.js') }}"></script>
<script src="{{ asset_url('vendor/libs/@form-validation/umd/plugin-auto-focus/index.min.js') }}"></script>

<!-- Main JS -->
<script src="{{ asset_url('js/main.js') }}"></script>

<!-- Page JS -->
<script src="{{ asset_url('js/dashboards-analytics.js') }}"></script>
{{-- <script src="{{ asset_url('js/tables-datatables-basic.js') }}"></script> --}}

<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.17.0/xlsx.full.min.js"></script>


<script type="text/javascript">
    function printDiv(fileName) {
        var elementToPrint = document.getElementById('myTabel');
        if (elementToPrint) {
            // Save the original content of the body
            var originalContent = document.body.innerHTML;
            
            // Replace the body content with the content to print
            document.body.innerHTML = elementToPrint.innerHTML;

            // Print the content
            window.print();

            // Create a temporary link to trigger download with the custom name
            var blob = new Blob([elementToPrint.innerHTML], { type: 'application/msword' });
            var link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = fileName + '.html'; // Set the downloaded file name

            // Append the link to the document and trigger the click event to download
            document.body.appendChild(link);
            link.click();

            // Remove the link after the download
            document.body.removeChild(link);

            // Restore the original content of the body
            document.body.innerHTML = originalContent;
        }
    }
</script>

<script type="text/javascript">
    function exportToExcel(fileName) {
        // Get the table element
        var table = document.getElementById('myTabel');

        // Convert table to Excel workbook
        var wb = XLSX.utils.table_to_book(table);

        // Save the workbook as an Excel file
        XLSX.writeFile(wb, fileName + '.xlsx');
    }
</script>


<script>
    document.addEventListener('DOMContentLoaded', function () {
        // Select all parent menu items with submenus
        const parentMenuItems = document.querySelectorAll('li.menu-item');

        parentMenuItems.forEach((parentMenuItem) => {
            // Find the child <ul> inside the parent
            const submenu = parentMenuItem.querySelector('ul.menu-sub');

            if (submenu) {
                // Count the number of <li> items in the <ul>
                const childItemsCount = submenu.querySelectorAll('li.menu-item').length;

                // Find the badge element and update its content
                const badge = parentMenuItem.querySelector('.badge');
                if (badge) {
                    badge.textContent = childItemsCount;
                }
            }
        });
    });
</script>
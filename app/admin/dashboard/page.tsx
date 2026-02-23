export default function DashboardAdminPage() {
  return (
    <div>
      <h1 className="text-7xl">Dashboard</h1>
      <div className="flex gap-10 w-full">
        <div className="bg-primary mt-5">
          <p>
            <span>296</span> Games
          </p>
          <p>All Games</p>
        </div>
        <div className="bg-secondary mt-5">
          <p>
            <span>150</span> Sales
          </p>
          <p>All Sales</p>
        </div>
        <div className="bg-primary mt-5">
          <p>
            <span>520$</span> Earning
          </p>
          <p>All Earnings</p>
        </div>
        <div className="bg-secondary mt-5">
          <p>
            <span>21</span> New Games
          </p>
          <p>All Arrivals</p>
        </div>
      </div>

      <div className="bg-primary mt-10 p-5">
        <h1>Recent Orders</h1>
        <table>
          <tr>
            <th>Users</th>
            <th>Game</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
          <tr>
            <td>Pratchaya Leelanuwat</td>
            <td>Final Fantasy XV</td>
            <td>23 Feb 2026</td>
            <td>Successful</td>
          </tr>
          <tr>
            <td>Pratchaya Leelanuwat</td>
            <td>Final Fantasy XV</td>
            <td>23 Feb 2026</td>
            <td>Successful</td>
          </tr>
          <tr>
            <td>Pratchaya Leelanuwat</td>
            <td>Final Fantasy XV</td>
            <td>23 Feb 2026</td>
            <td>Successful</td>
          </tr>
          <tr>
            <td>Pratchaya Leelanuwat</td>
            <td>Final Fantasy XV</td>
            <td>23 Feb 2026</td>
            <td>Successful</td>
          </tr>
          <tr>
            <td>Pratchaya Leelanuwat</td>
            <td>Final Fantasy XV</td>
            <td>23 Feb 2026</td>
            <td>Successful</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

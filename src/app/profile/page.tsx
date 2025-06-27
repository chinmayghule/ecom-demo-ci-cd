import {
  ProfileInfoSection,
  QuickActionsSection,
  RecentOrdersSection,
  RecentWishlistItems,
} from "./_components";

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <ProfileInfoSection />

        {/* Quick Actions & Recent Activity */}
        <div className="lg:col-span-2 space-y-8">
          <QuickActionsSection />
          <RecentOrdersSection />
          <RecentWishlistItems />
        </div>
      </div>
    </div>
  );
}
